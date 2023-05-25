import {createRouter, createWebHistory} from 'vue-router'

interface Module {
    install: (options: { router: any }) => void;
  }
  
  interface Options {
    modules?: Module[];
    configs?: {
      router?: any;
    };
  }
  
  const createRouterInstance = () => {
    return createRouter({
      history: createWebHistory(),
      routes: []
    });
  };
  
  const plugin = {
    install: (app: any, options: Options = { configs: {} }): void => {
      const modules = options.modules || [];
      const router = options.configs?.router || createRouterInstance();
  
      modules.forEach((module: Module) => module.install({ router }));
      app.use(router);
    }
  };
  
  export default plugin;
