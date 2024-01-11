import { StringLiteral } from '@babel/types';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'remember_me', name: 'user' })
export class User {
  @ApiProperty({ description: '유저 구분 아이디' })
  @PrimaryColumn()
  id: String;

  @ApiProperty({ description: '이메일(구글OAuth의 경우 지메일)' })
  @Column()
  email: String;

  @ApiProperty({ description: '역할(보호자, 피보호자)' })
  @Column()
  role: 'CareGiver' | 'CareRecipient';

  @ApiProperty({ description: '리프레시 토큰' })
  @Column()
  refreshToken: String;

  @ApiProperty({ description: '생성일' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: '수정일' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ example: null, description: '삭제일' })
  @DeleteDateColumn()
  deletedAt: Date | null;
}
