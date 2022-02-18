# cache

This is an alternative to something like memcached. In AWS, memcached needs to be ran in EC2, but this can be expensive for infrequent usage.
This serverless project launches a cheap cache which you can access via HTTP request. 

It uses Api Gateway, Lambda, DyanamoDB, and CloudWatch Events.

The gateway exposes `/set` and `/get` endpoints.

`/set` will store the value into DynamoDB.

The CloudWatch event runs on a timer, and periodically, it will check DynamoDB for values which were inserted a long time ago, and it deletes them.

`/get` takes in a key, and returns the value if it exist.



