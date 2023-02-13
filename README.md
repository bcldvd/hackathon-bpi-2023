# Kiko

## Development server

Run `ng run dev` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Generate a new features

1. Run `ng g m features/home-bpi --routing` to generate a features library.
2. Reference new path in [app-routing.module.ts](./src/app/app-routing.module.ts)
3. Then run `ng g component features/home-bpi` to generate the underlying component
4. Reference base route in your new module's routing file

### Generate a new shared component

1. Run `ng g m cdk/COMPONENT_NAME` to generate a features library.
2. Then run `ng g component cdk/COMPONENT_NAME --export` to generate the underlying component