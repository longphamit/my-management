export interface Token {
    '.expires': string;
    '.issued': string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    role: string[];
    token_type: string;
    userId: string;
    username: string;
    // systemModules: SystemModule[];
  }