import { Injectable } from '@nestjs/common';
@Injectable()
export class AdminRepository {
  private admin = [];

  async existeComEmail(email: string) {
    const possivelUsuario = this.admin.find((admin) => admin.email === email);

    return possivelUsuario !== undefined;
  }
}
