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
    nullable: true,
    comment: 'SQL Query to fetch data'
  })
  rule: string

  @Column('text')
  status: string

  @Column('text', {
    comment: 'Cron expression or period interval'
  })
  interval: string

  @Column('text')
  endpoint: string

  @Column('text')
  returnType: string

  @Column('text')
  dataKey: string

  @Column('text', {
    comment: 'Array, Key-Value, Key-Object, Single Row, Custom'
  })
  keyField: string

  @Column('text')
  valueField: string

  @Column('text', {
    nullable: true
  })
  description: string

  @ManyToOne(type => Datasource)
  datasource: Datasource
}
