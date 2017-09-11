## Usage

First, run `npm install`.

Inside the environments folder, you will find two files -- one for production and one for development. Open each up and set wpBase to whatever you dev and live sites are.

For development, simply run `ng serve`, in the terminal inside the project folder, and the CLI will do the rest. The content of the site is managed from the WordPress admin panel.  

To push the project to the server, run `ng build --prod --deploy-url="/wp-content/themes/{THEME_DIRECTORY_NAME}/dist/"` from your command line. This will output a `dist` folder. Upload index.php, styles.css, functions.php, and the dist folder to your theme directory on your server. You should be good to go!

This project will play nice with the Angular CLI.

change `environment.prod.ts` property `wpBase` to the correct domain in order to use in production

check base href in `index.html`

## Contributions
