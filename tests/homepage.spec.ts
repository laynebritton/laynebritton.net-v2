import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Layne Britton' })
  ).toBeVisible();
});

test('About me and projects nav buttons render', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'About me' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Projects' })).toBeVisible();
});

test('clicking about me button navigates to the about me section', async ({
  page
}) => {
  await page.getByRole('button', { name: 'About me' }).click();
  await expect(page.locator('#root')).toMatchAriaSnapshot(
    `- heading "Layne Britton" [level=1]`
  );
});

test('external site buttons should render', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Resume' })).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'GitHub' }).first()
  ).toBeVisible();
  await expect(page.getByRole('button', { name: 'LinkedIn' })).toBeVisible();
});

test('clicking projects button navigates page to projects section', async ({
  page
}) => {
  await page.getByRole('button', { name: 'Projects' }).click();
  await expect(page.locator('#root')).toMatchAriaSnapshot(
    `- heading "Projects" [level=1]`
  );
});

test('email visibility is determined by clicking email button ', async ({
  page
}) => {
  await expect(
    page.getByRole('link', { name: 'layne@laynebritton.net' })
  ).toBeHidden();

  await expect(page.getByText('email')).toBeVisible();
  await page.getByText('email').click();
  await expect(
    page.getByRole('link', { name: 'layne@laynebritton.net' })
  ).toBeVisible();
});
