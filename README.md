## To Reproduce:

1. On Windows: edit `runverticle.bat` to set VERTX_HOME to the path to a vertx-3.1.0 distribution on your local system
2. cd into the project root directory and execute `runverticle.bat`
3. Expected result: verticle launches without error
4. Actual result: verticle fails to deploy due to this error:
```
Cannot find module ./parser
```
5. On Linux/Mac: edit `runverticle` to set VERTX_HOME to the path to a vertx-3.1.0 distribution on your local system
2. cd into the project root directory and execute `runverticle`
3. Expected result: verticle launches without error
4. Actual result: verticle launches without error
