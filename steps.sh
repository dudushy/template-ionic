echo "---------------------"
echo "- [steps.sh] STARTED -"
echo "---------------------"

echo ""
echo "[steps.sh] install ionic"
echo ""
npm install -g @ionic/cli

echo ""
echo "[steps.sh] start ionic project"
echo ""
ionic start project tabs --type=angular --cordova

echo ""
echo "[steps.sh] cd ./project"
echo ""
cd ./project

echo ""
echo "[steps.sh] install eslint"
echo ""
npm install -g eslint

echo ""
echo "[steps.sh] init eslint"
echo ""
npm init @eslint/config

echo ""
echo "[steps.sh] generate pages (login, menu, settings)"
echo ""
ionic g page login
ionic g page menu
ionic g page settings

echo "----------------------"
echo "- [steps.sh] FINISHED -"
echo "----------------------"