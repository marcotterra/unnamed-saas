import {
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  Res,
} from '@nestjs/common';
import { UserService } from '~/application/services/user.service';
import { type Response } from 'express';

@Controller('/users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private userService: UserService) {}

  @Get('/')
  public async index(@Res() res: Response): Promise<any> {
    this.logger.debug('resolving the index route');

    return res.status(HttpStatus.OK).json({ hello: 'world' });
  }

  @Get(':id')
  public async getUser(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    this.logger.debug('resolving the getUser route', { user: id });

    const user = this.userService.findById(id);

    return res.status(HttpStatus.OK).json(user);
  }
}
