## To Reproduce:

1. Edit runverticle.bat (windows) or runverticle (linux) to set the path to a vertx-3.1.0 distribution on your local system
2. Execute runverticle.bat or runverticle
3. Expected result: verticle launches without error
4. Actual result: verticle fails to deploy due to this error:
```
Cannot find module ./parser
```