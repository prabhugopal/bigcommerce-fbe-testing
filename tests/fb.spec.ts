
import { test, expect } from '@playwright/test';


const testProp = {
    testUser  : {
        name:  process.env.TEST_USER,//'roommate+1649172314@bigcommerce.com',
        password: process.env.TEST_PASSWORD//'Test1!-57c7c562dc921d7b733b'
    },
    storeUrl : process.env.BASE_URL, //'https://store-ma5eg66aub.my-integration.zone';
    fbeConnectUri : '/manage/microapps/ng-omnichannel/facebook/about',
    fbeSettingsUri : '/manage/microapps/ng-omnichannel/facebook/settings-v2',
    fbUser : {
        name : process.env.FB_USER,
        password : process.env.FB_PASSWORD
    }
}

test.beforeEach(async ({ page }) => {
    await page.goto(testProp.storeUrl + testProp.fbeConnectUri);
    await page.locator('#user_email').fill(testProp.testUser.name);
    await page.locator('#user_password').fill(testProp.testUser.password);
    await page.locator('.login-form').press('Enter');
  });

test.describe('Facebook Connect & Disconnect', () => {
    test('check connect', async ({ page }) => {
        await page.locator('text=Connect').click();
        await page.locator('id=email').fill(testProp.fbUser.name);
        await page.locator('id=pass').fill(testProp.fbUser.password);
        await page.locator('#loginbutton').click();

        const elem =  await page.locator(':nth-match(:text("Continue as"), 2)');
        const txt = await elem.innerText();
    
        await page.locator('[aria-label="'+txt.toString().replace("?", "")+'"]').click();

        await page.locator('text=/Facebook ads/').click();
        await page.locator('text=/Instagram Shopping/').click();
        await page.locator('text=/Get started/').click();
        await page.locator('.gs1a9yip > :nth-child(1) > .j83agx80 > :nth-child(1) > .d2edcug0').click()
        await page.locator('text=/Continue/').click();
        await page.locator('.gs1a9yip > :nth-child(1) > .j83agx80 > :nth-child(1) > .d2edcug0').click()
        await page.locator('text=/Continue/').click();
        await page.locator('.gs1a9yip > :nth-child(1) > .j83agx80 > :nth-child(1) > .d2edcug0').click()
        await page.locator('text=/Continue/').click();
        await page.locator('.gs1a9yip > :nth-child(1) > .j83agx80 > :nth-child(1) > .d2edcug0').click()
        await page.locator('text=/Continue/').click();
        await page.locator('text=/Continue/').click();
        await page.locator(':nth-match(:text("Continue"), 2)').click();
        await page.locator('text=/Next/').click();
        await page.locator('text=/Finish/').click();

        await page.goto(testProp.storeUrl + testProp.fbeSettingsUri);
        await expect(page.locator('h2 >> nth=1')).toHaveText('Disconnect Facebook');
    });

    test('check disconnect', async ({ page }) => {
        
        await page.goto(testProp.storeUrl + testProp.fbeSettingsUri);
        await expect(page.locator('h2 >> nth=1')).toHaveText('Disconnect Facebook');
        await page.locator('button:has-text("Disconnect")').click();
        await page.waitForTimeout(2000);
        await page.locator('text=Setup was too difficult').click();
        await page.locator(('div[role="dialog"] button:has-text("Disconnect")')).click();
        await page.waitForTimeout(6000);
        await expect(page).toHaveURL( testProp.storeUrl + "/manage/microapps/channel-manager");
    });
});



