// If NODE_PATH is not set correctly, vertx will be unable to find js-array, and launch will fail with
// 'Cannot find module js-array'. If NODE_PATH is set, vertx will find js-array, but js-array's require
// statement for './parser' will cause verticle launch to fail with 'Cannot find module ./parser'
require('rql/js-array')