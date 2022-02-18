import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpfsModule } from './ipfs/ipfs.module';
import { ContractModule } from './contract/contract.module';
import { UserModule } from './user/user.module';
import { AudioModule } from './audio/audio.module';
import { BloomfilterModule } from './bloomfilter/bloomfilter.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://test:<password>@cluster0.rkbsz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    IpfsModule,
    ContractModule,
    UserModule,
    AudioModule,
    BloomfilterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
