## To Reproduce:

1. On Windows: edit `runverticle-implicit.bat` to set VERTX_HOME to the path to a vertx-3.2.1 distribution on your local system
2. cd into the project root directory and execute `runverticle-implicit.bat`
3. Expected result: verticle launches without error
4. Actual result: verticle fails to deploy due to this error:
```
Cannot find module ./myOtherFlatScript
```

5. Now execute `runverticle-explicit.bat`
6. Expected result: verticle launches without error
7. Actual result: verticle deploys successfully

## Note:
This failure with 3.2.1 is the opposite of the behavior in 3.1.0, where the implicit require statement, which relies on package.json's 'main' property to resolve to the module's main script, would succeed in resolving the main script's require statements, and the explicit require statement would fail in resolving the main script's require statements.

Both conventions are used in javascript node modules, so both styles of require should be successfully resolved by the vertx engine.