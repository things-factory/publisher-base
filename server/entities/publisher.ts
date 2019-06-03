import { Entity, Index, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Datasource } from '@things-factory/datasource-base'

@Entity('publishers')
@Index('ix_publisher_0', (publisher: Publisher) => [publisher.domain, publisher.name], { unique: true })
export class Publisher extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text', {
    unique: true
  })
  name: string

  @Column('text', {
    nullable: true
  })
  rule: string

  @Column('text', {
    nullable: true
  })
  type: string

  @Column('boolean', {
    default: false
  })
  started: boolean

  @Column('text', {
    nullable: true
  })
  description: string

  @ManyToOne(type => Datasource)
  datasource: Datasource
}
