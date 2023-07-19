import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("users_pkey", ["userId"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "user_id" })
  userId: number;

  @Column("character varying", { name: "username", nullable: true, length: 50 })
  username: string | null;

  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 50,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 50,
  })
  lastName: string | null;

  @Column("character varying", {
    name: "user_email",
    nullable: true,
    length: 50,
  })
  userEmail: string | null;

  @Column("character varying", {
    name: "user_phone",
    nullable: true,
    length: 13,
  })
  userPhone: string | null;

  @Column("character varying", {
    name: "user_password",
    nullable: true,
    length: 100,
  })
  userPassword: string | null;
}
