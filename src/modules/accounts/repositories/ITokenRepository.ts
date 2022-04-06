import { Token } from "../infra/typeorm/entities/Token";

interface IToken {
    user_id: string;
    refresh_token: string;
    expires_at: Date;
}

interface ITokenRepository {
    
    create({refresh_token, user_id, expires_at}: IToken): Promise<Token>;

} export {ITokenRepository, IToken}