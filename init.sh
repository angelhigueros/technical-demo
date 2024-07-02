set -o nounset -o errexit
cd `dirname $0`

echo '### Install server dependencies'
npm install

echo '### Install client dependencies'
cd client
npm install