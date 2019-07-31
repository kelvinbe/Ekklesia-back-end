import * as dotenv from 'dotenv';
import * as fs from 'fs'
import { Injectable } from '@nestjs/common';
import * as Joi from 'joi';

export interface EnvConfig {
    [key: string]: string;
}

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig;

    constructor(){
        const nodeEnv = process.env.NODE_ENV || 'development';

        const config = dotenv.config({ path: `${nodeEnv}.env`}).parsed;
        this.envConfig = this.ValidateInput(config);
    }
    get port(): number {
        return Number(this.envConfig.PORT)
    }

    private ValidateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string()
            .valid(['development'])
            .default('development'),

            PORT: Joi.number().default(4000),
            API_AUTH_ENEBLED: Joi.boolean().required(),
        });

        const { error, value: validatedEnvConfig } = Joi.validate(
            envConfig,
            envVarsSchema
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig
    }




}