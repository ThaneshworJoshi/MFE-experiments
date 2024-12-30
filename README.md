# Micro-Frontend (MFE) Architecture
Micro-frontend architecture is a design approach that decomposes a web application into smaller, independently deployable and maintainable modules, enabling scalability, flexibility, and faster development cycles.
<br/>

## Why Micro-Frontends?
- **Independent Development** : Teams can develop, test, and deploy features independently.
- **Scalability** : Modules can scale individually without impacting the entire application.
- **Technology Agnostic** : Teams can use different frameworks/libraries for each mfe.
- **Improved Maintainability** : Smaller codebases are easier to manage and debug.

<hr/>
<br/>

## How It Works

 1. **Decomposition**: Split the application into smaller, self-contained modules (eg: product list, payment, cart, homepage).
 2. **Integration**: Stitch these modules together at runtime using client-side or server-side composition.
 3. **Communication**: handle inter-module communication using global state management or an event bus.

<hr/>

## Container 
In the context of Micro-Frontend (MFE) architecture, a container refers to the main application or shell that hosts and manages the integration of multiple micro-frontends. It acts as the orchestrator, combining the independent micro-frontend modules into a cohesive user experience.

### Key Responsibilities of a Container
1. Hosting Micro-Frontends
2. Routing
3. Shared State Management
4. Dependency Management
5. Authentication and Authorization
6. Error Handling

## How a Container Works
The container application fetches and render mfes based on:
 - Routes: Loades specific mfe for given route.
 - Dynamic Impots: Fetches and loads the required mfe module.

## Major Categories of Integration

1. **Client Side Integration / Run Time Integration:**

    **Description**: Integration happens in the browser. Each MFE is loaded dynamically and composed on the client side.


    **How It Works**

    1. **Development**: Each micro-frontend is developed as a standalone module with its own build and deployment pipeline.
    2. **Publishing**: The micro-frontend is deployed as a static asset or service and exposed via a remote entry point (eg: https://my-app.com/productlist.js)
    3. **Dependency Installation**: The container does not install micro-frontends at build time. Instead, it fetches and loads them dynamically during runtime.
    4. **Runtime Loading**: The container dynamically imports the required micro-frontend modules using Webpack Module Federation, Single-SPA, or other runtime orchestration tools.
    
    
    **Characteristics**:
    1. Uses JS framework or libraries.
    2. Modules are loaded via HTTP requests.
    3. Independent deployment of MFEs. 

    **Advantages**:
    1. Decoupled Architectur.
    2. Technology Flexibility
    3. Different version can be deployed and container can decide which one to use.
    
    **Disadvantages**:
    1. Performance Overhead: Requires additional time to load mfes during runtime.
    2. Complexity: Requires careful configuration of shared dependency and runtime orchestration.

<br/>

2. **Server Side Integration :**

    **Description**: The server assembles the MFE into a single page before sending it to the client.

    **Characteristics**:
    1. Better performance since the composition happens on the server.
    2. Useful for SEO since the content is pre-rendered. 

<br/>

3. **BuildTime Integration:**

    **Description:** All the MFEs are integrated during build process and deployed as a single application.
    It involves packaging each micro-frontend and including it as a dependency in the container application.

    **Characteristics**:
    1. Silmplifies deployment.
    2. Tight coupling between MFEs. 


    **How It Works**

    1. **Development**: The engineering team develops a micro-frontend, e.g., ProductsList.
   
    2. **Publishing**: The micro-frontend is published as an NPM package.
    3. **Dependency Installation**: The container team installs the published package as a dependency.
    4. **Build Process**: The container application builds an output bundle that includes all the code for the micro-frontends.
    
    <br/>

    **Use Case**:
    
    Build-time integration is suitable for small teams with synchronized development cycles or when all micro-frontends use the same technology stack and deployment strategy.

<br/>

4. **Iframe-Based Integration**:
    **Description**: Embedding micro-frontends as iframe elements in the parent application.

    **Characteristics**:
    1. Ensures strict isolation..
    2. Limited communication and performance issues. 
<br/>
<br/>

# [ModuleFederation](docs/moduleFederation.md)
# [Shared Module For Micro Frontends](docs/shardModule.md)