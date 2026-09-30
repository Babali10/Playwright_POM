import { test, expect } from '@playwright/test';
import {LoginPage} from '../../Pages/login'

test('test', async ({ page }) => {

  const Login1 = new LoginPage(page)

 await Login1.gotoLoginPage()
  await Login1.login('tomsmith','SuperSecretPassword!')

 
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});