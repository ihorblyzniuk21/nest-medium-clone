import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1668428202805 implements MigrationInterface {
  name = 'SeedDb1668428202805';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('nodejs'), ('nestjs'), ('apple')`,
    );

    //password: qwerty
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('vanda', 'vanda@gmail.com', '$2b$05$rs.lFWczfEw1Bw2ZpmLAiuKdMJ/E/oaamlkZZqVhsySCPRjjqanwu')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First description', 'First article body', 'nodejs, nestjs', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'Second description', 'Second article body', 'apple', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
