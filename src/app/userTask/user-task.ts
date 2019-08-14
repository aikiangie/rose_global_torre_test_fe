import { UserModule } from '../user/user.module';

export class UserTask {
    id: number;
    description: string;
    state: string;
    userId: UserModule;
    user: any;
}
