v1="file://"$(cd $(dirname $0) && pwd)"/table.json"

aws dynamodb create-table \
--cli-input-json $v1
