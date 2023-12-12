
import { CreateDateColumn, Column } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { JoinColumn, OneToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class TokenRecovery {

	@PrimaryGeneratedColumn('uuid')
	token_id: string;

	@OneToOne(() => User)
	@JoinColumn()
	email: string;

	@Column()
	token: string;

	@Column({ default: true })
	valid: boolean;

	@Column()
	expiration_date: Date;

	constructor() {
		// 30 min
		const offset = 1 * 60 * 30 * 1000;
		this.expiration_date = new Date(Date.now() + offset);
	}
}
