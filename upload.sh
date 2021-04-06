ng build
aws s3 rm s3://smcgown.com --recursive
aws s3 sync ./dist/CloudResumeChallenge2/ s3://smcgown.com --acl public-read
aws cloudfront create-invalidation --distribution-id EO37R0PS8J6V4 --paths "/*"

