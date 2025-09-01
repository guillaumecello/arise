bash arise build;
cd ..;
echo running Tailwind ...
npx tailwindcss -i styles.css -o arise/arise-out/output.css --minify;
