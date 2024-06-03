"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
//const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
// exports.bucketName = bucket.id;

//let sg = new aws.ec2.SecurityGroup("web-sg", {
//   ingress: [{protocol: 'tcp', fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"]}]
// })
    
// for (let i = 0; i < 3; i++) {
//    new aws.ec2.Instance(`web-${i}`, {
//        ami:"ami-00beae93a2d981137",
//        instanceType: "t2.micro",
//        SecurityGroup: [sg.id],
//        tags:{
//             Name: `Machine-${i+1}`
//        },
//    })
// }