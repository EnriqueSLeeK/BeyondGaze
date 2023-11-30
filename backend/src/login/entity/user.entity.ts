import { Entity,
			PrimaryGeneratedColumn,
			Column,
			CreateDateColumn
		} from 'typeorm'

@Entity()
export class User {

	@PrimaryGeneratedColumn('uuid')
	userId: string;

	@Column()
	name: string;

	@Column()
	secondName: string;

	@Column()
	password: string;

	@Column()
	email: string;

	@Column()
	nickname: string;

	@CreateDateColumn()
	creationDate: Date;
	
	@Column({ type: 'timestamptz' })
	lastAccessDate: Date;

}
