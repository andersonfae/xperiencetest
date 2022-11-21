import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';

@Controller('admin')
export class AdminController {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    private adminService: AdminService,
  ) {}

  @Post()
  async add(@Req() request: Request) {
    return this.adminService.add({
      name: request.body['name'],
      email: request.body['email'],
      password: request.body['password'],
      role: 1,
    });
  }

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  @Get(':id')
  findOne(id: any): Promise<Admin> {
    return this.adminService.EncontrarUm(id);
  }

  @Delete(':id')
  async remove(@Param('id') id): Promise<void> {
    await this.adminRepository.remove(id);
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.adminRepository.atualiza(
      id,
      novosDados,
    );
  }
}
