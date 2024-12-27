## Module Federatation

Module federation is a Webpack feature introducedin Webpack 5. It enables developers to build Micro Frontends by allowing  JavaScript modules to be shared dynamically between different applications.

## Steps to Set Up Module Federation

1. ### Install Dependencies: 
    Ensure Webpack 5 is installed in you project.
    <br/>
    ```npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev```

2. ### Configure Module Federation Plugin: 
    Update then ```webpack.config.js``` file of both host and remote application.

    - #### Host application configuration: 
        ```
        const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

        module.exports = {
            // Entry point for the application
            entry: "./src/index", // Specifies the starting file for the application bundling

            output: {
                // The base URL for all assets within the application
                publicPath: "http://localhost:3000/", // Ensures correct resolution of dynamically loaded chunks
            },

            plugins: [
                new ModuleFederationPlugin({
                    // Name of the current application (host)
                    name: "host", // Used internally to identify this application in Module Federation

                    // Remote micro-frontends consumed by this host application
                    remotes: {
                        mfe1: "mfe1@http://localhost:3001/remoteEntry.js", 
                        // 'mfe1' is the alias for the remote app
                        // 'http://localhost:3001/remoteEntry.js' is the URL of the remote module's entry point
                    },

                    // Shared dependencies across applications
                    shared: {
                        react: { singleton: true }, // Ensures only one version of React is used between host and remotes
                        "react-dom": { singleton: true }, // Ensures only one version of React-DOM is used
                    },
                }),
            ],

            devServer: {
                // Development server configuration
                port: 3000, // Host application runs on port 3000
            },
        };

        ```

    - #### Remote Application Configuration:
        ```
        const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

        module.exports = {
            // Entry point for the application
            entry: "./src/index", // Specifies the starting file for this micro-frontend

            output: {
                // The base URL for assets loaded dynamically
                publicPath: "http://localhost:3001/", // Ensures assets are correctly resolved at runtime
            },

            plugins: [
                new ModuleFederationPlugin({
                    // Name of the micro-frontend
                    name: "mfe1", // Unique identifier for this micro-frontend

                    // Name of the file that serves as the entry point for other applications
                    filename: "remoteEntry.js", // Exposes the application for use by host applications

                    // Modules exposed by this micro-frontend
                    exposes: {
                        "./App": "./src/App", // Makes `./src/App` accessible to other federated modules under the alias `./App`
                    },

                    // Shared dependencies across applications
                    shared: {
                        react: { singleton: true }, // Ensures only one instance of React is used
                        "react-dom": { singleton: true }, // Ensures only one instance of React-DOM is used
                    },
                }),
            ],

            devServer: {
                // Development server configuration
                port: 3001, // Micro-frontend application runs on port 3001
            },
        };
        ```

3. ## Export and Import Remote Modules
    - In a remote app (mfe1), expose the module:
    ```
        // src/App.js
        const App = () => <div>Hello from MFE1!</div>;
        export default App;
    ```

    - In the host app, import the remote module dynamically:

    ```
        import React, { Suspense } from "react";

        const RemoteApp = React.lazy(() => import("mfe1/App"));

        const App = () => (
            <div>
                <h1>Host Application</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <RemoteApp />
                </Suspense>
            </div>
        );

        export default App;
    ```
4. ## Run Both Applications:
    Start both host and remote applications:
    ```
    # In host project
    npm start

    # In remote project
    npm start
    ```
5. ## Access the Application: 
    - Host: http://localhost:3000
    - Remote: http://localhost:3001


# How Module Federation Works

## Remote Entry: 
1. The remoteEntry.js file in the remote app registers and exposes the modules.

2. Dynamic Loading: The host app fetches the exposed modules via a dynamic import using the URL specified in remotes.

3. Shared Dependencies: Dependencies like react and react-dom are shared between the applications to avoid duplication.

4. On-demand Loading: Modules are loaded only when needed, improving performance.
