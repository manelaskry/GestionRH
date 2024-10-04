import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  fullName;

  @Column({ unique: true })
  email;

  @Column()
  password;

  @Column()
  role;  // Can be 'employee', 'rh', 'admin'
}
