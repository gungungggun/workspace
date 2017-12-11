v1="file://"$(cd $(dirname $0) && pwd)"/table1.json"
aws dynamodb create-table \
--cli-input-json $v1 \
--endpoint-url http://localhost:8000

v2="file://"$(cd $(dirname $0) && pwd)"/table2.json"
aws dynamodb create-table \
--cli-input-json $v2 \
--endpoint-url http://localhost:8000
