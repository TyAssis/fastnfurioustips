1. 
Make sure you have installed create-react-app package globally.

2. 
Run: create-react-app <your-app-name>
So, it's done.

<Optional>
  I. Add CSS modules.
    It is nice to add this cause with it you are able to use CSS files like you use in everywhere, exploiting all features.
    It also in backgrounds manage uniques ids to class names, that means we don't have to worry about names conflicting globally.
    
    So, run: npm run eject
    Then, go to /config/webpack.config.dev.js/ and to /config/webpack.config.prod.js/ and put this lines in them (find where...):
    
    {
      test: [/\.css$/],
      use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1,
                moduldes: true,
                localIdentName: '[name]__[local]__[hash:64:5]'
            },
           ...
           
     II. Run or restart your app.
           
<Optional>
   I. Clean React default chunks... 
