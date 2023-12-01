import { Entity,
			PrimaryGeneratedColumn,
			Column,
			CreateDateColumn,
			UpdateDateColumn
		} from 'typeorm'

@Entity({ name: "app_user" })
export class User {

	@PrimaryGeneratedColumn('uuid')
	userId: string;

	@Column()
	name: string;

	@Column()
	secondName: string;

	@Column()
	password: string;

	@Column({ unique: true })
	email: string;

	@Column()
	nickname: string;

	@CreateDateColumn()
	creationDate: Date;
	
	@UpdateDateColumn()
	lastAccessDate: Date;

}
