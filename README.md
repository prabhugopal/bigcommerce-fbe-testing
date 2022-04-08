# bigcommerce-fbe-testing

Uses [playwright] https://playwright.dev for automating bigcommmerce & facebook channel connect & disconnect

How to use?

- Simple Use

```javascript
npx playwright test
```

- Single worker

```javascript
TEST_USER=roommate+1649172314@bigcommerce.com TEST_PASSWORD=***** BASE_URL=https://store-ma5eg66aub.my-integration.zone \
FB_USER=user@mail.com FB_PASSWORD=***** \
npx playwright test tests/fb.spec.ts --headed --workers=1 --project=chromium
```

- Repeat test for 10 times

```javascript
TEST_USER=roommate+1649172314@bigcommerce.com TEST_PASSWORD=***** BASE_URL=https://store-ma5eg66aub.my-integration.zone \
FB_USER=user@mail.com FB_PASSWORD=***** \
npx playwright test tests/fb.spec.ts --headed --workers=1 --project=chromium --repeat-each 10
```

Okay!!, do i really need to write my test script?? I am bit lazy!!! 
      
        Aah! We got codegen to record & run!!...
        
```
npx playwright codegen --target javascript -o example.js https://store-ma5eg66aub.my-integration.zone/manage/microapps/ng-omnichannel/facebook/about
```

[More goes in here](https://playwright.dev/docs/intro)
