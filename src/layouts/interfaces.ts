export interface AppConfig {
  drawer:boolean;
  rail:boolean;
}

export interface ViewPropsInterface {
  appConfig: AppConfig;
  loading?: boolean;
  disabled?: boolean;

}

export interface DefaultViewPropsInterface extends ViewPropsInterface{
  a?:number
}

