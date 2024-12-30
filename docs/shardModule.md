# Shared Module for Micro Frontends (MFEs)

In a Micro Frontend (MFE) architecture, a Shared Module is a module or library that is reused across multiple MFEs to avoid redundancy and ensure consistency. It allows you to share common code (e.g., utilities, libraries, components, or services) between MFEs, reducing the overall bundle size and maintaining uniform functionality.

By leveraging Webpack's Module Federation, a shared module enables dynamic runtime integration of shared dependencies, improving performance and developer productivity while minimizing version conflicts.



---

## Key Features

1. **Code Reusability**: Avoid duplicating common logic and functionality across multiple MFEs.
2. **Consistency:** Maintain a uniform look and behavior by sharing UI components or utilities.
3. **Optimized Performance:** Reduce the bundle size of each MFE by sharing dependencies.
4. **Version Control:** Ensure compatible versions of shared libraries are used across all MFEs.
5. **Flexibility:** Dynamically load modules during runtime.
---

## Common Examples of Shared Modules
- **UI Components:** Buttons, modals, dropdowns, etc.
- **Utility Libraries:** Functions for date manipulation, API handling, logging, etc.
- **State Management:** Shared Redux or Zustand stores.
- **Design Systems:** Common styles, themes, or branding assets.
- **Framework Libraries:** React, Angular, or Vue components.
- **API Clients:** Shared HTTP clients or GraphQL query modules.

### Benfits: 
1. **Efficient Development:**
    - Centralized development of shared functionality reduces maintenance overhead.
    - Teams can focus on MFE-specific features while using shared modules.
2. **Smaller Bundle Sizes:**
    - Shared dependencies are loaded once, minimizing duplicate code across MFEs.
3. **Seamless Updates:**
    - Update shared functionality in one place, and all consuming MFEs benefit.
4. **Dynamic Integration:**
    - Share modules between MFEs without rebuilding or redeploying the entire application.


# Sharing vendors code:

Module Federation simplifies the challenge of sharing dependencies like vendor libraries across multiple applications. It allows developers to load code dynamically at runtime rather than bundling all dependencies upfront, reducing duplication and improving performance.


**Vender code challanges in MFEs:**

- Without Module Federation, each MFE often bundles its own copy of vender libraries, leading to :
    1. Increase bundles sizes: Repeated code for shared libraries
    2. Performance Bottlenecks: Larger payloads and duplicate downloads
    

**Module Federation Role:**

- Enables shared dependencies across applications.
- Allows dynamic runtime loading, where one MFE can consume modules exposed by another.

**Sharing Vendor Libraries:**
- Vendor libraries like react, lodash, etc., are ideal candidates for sharing because they are:
    1. Frequently used across MFEs.
    2. Large in size, and duplicating them impacts performance.

## Example 
### Host MFE (Host App)

```
new ModuleFederationPlugin({
    name: "host",
    remotes: {
        mfe1: "mfe1@http://localhost:3001/remoteEntry.js",
    },
    shared: {
        react: { singleton: true, requiredVersion: "^17.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^17.0.0" },
        lodash: { singleton: true },
    },
});
```
### Remote MFE (Remote App):

```
new ModuleFederationPlugin({
    name: "mfe1",
    filename: "remoteEntry.js",
    exposes: {
        "./Component": "./src/Component",
    },
    shared: {
        react: { singleton: true, requiredVersion: "^17.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^17.0.0" },
        lodash: { singleton: true },
    },
});

```

- ingleton: Ensures only one version of a shared dependency is loaded.
- Required Version: Helps prevent version mismatches between MFEs.
