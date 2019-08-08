import { UserModule } from 'src/app/user/user.module';

export class UserTask {
    id: number;
    description: string;
    user: UserModule;
}
