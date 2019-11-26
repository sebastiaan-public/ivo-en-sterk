# Roll-out
```bash
# NETLIFY:
# ACCEPTATION:
VERSION_LINE=$(awk 'NR==2' package.json)
VERSION=$(echo "$VERSION_LINE" | grep -Eio '\b[0-9.]+\b')
VERSION_MSG=$(echo "v$VERSION")
cd ~/planhr/227-app
rm -R ~/planhr/netlify/227-app-publish-acceptation/*
npm run build-acc
cd ~/planhr/netlify/227-app-publish-acceptation
git pull
cp -R ~/planhr/227-app/dist/* ~/planhr/netlify/227-app-publish-acceptation/
git add -A
git commit -m "$VERSION_MSG"
git push
cd ~/planhr/227-app
# npm run dev


# ! PRODUCTION:
VERSION_LINE=$(awk 'NR==2' package.json)
VERSION=$(echo "$VERSION_LINE" | grep -Eio '\b[0-9.]+\b')
VERSION_MSG=$(echo "v$VERSION")
cd ~/planhr/227-app
rm -R ~/planhr/netlify/227-app-publish-production/*
npm run build-prd
cd ~/planhr/netlify/227-app-publish-production
git pull
cp -R ~/planhr/227-app/dist/* ~/planhr/netlify/227-app-publish-production/
git add -A
git commit -m "$VERSION_MSG"
git push
cd ~/planhr/227-app

# create a tag
git tag -a $VERSION_MSG -m 'in production'
git push origin $VERSION_MSG




PROD BUILD WAS VOORAF:
  dist/js/chunk-vendors.d4a6655b.js         1628.29 KiB      472.14 KiB
  dist/js/app.e1cf6a82.js                   209.39 KiB       48.83 KiB
  dist/js/admin.fe63a22a.js                 29.85 KiB        8.36 KiB
  dist/js/tests.f0d164c6.js                 1.40 KiB         0.58 KiB
  dist/service-worker.js                    0.95 KiB         0.54 KiB
  dist/precache-manifest.bb7bf55284d4589    0.20 KiB         0.16 KiB
  ae2c11d158a1921b7.js
  dist/css/chunk-vendors.bba3dacd.css       551.93 KiB       74.59 KiB
  dist/css/admin.23d2b619.css               8.86 KiB         1.64 KiB
  dist/css/app.9499ae03.css                 6.90 KiB         1.21 KiB# ivo-en-sterk
