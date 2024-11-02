import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@/database/database.module';
import { AudioTechnologiesModule } from '@/modules/audio-technologies/audio-technologies.module';
import { FilesModule } from '@/modules/files/files.module';
import { GenresModule } from '@/modules/genres/genres.module';
import { LanguagesModule } from '@/modules/languages/languages.module';
import { LocationsModule } from '@/modules/locations/locations.module';
import { LoungesModule } from '@/modules/lounges/lounges.module';
import { PlacesModule } from '@/modules/places/places.module';
import { SeatsModule } from '@/modules/seats/seats.module';
import { SessionPlacesModule } from '@/modules/session-places/session-places.module';
import { SessionsModule } from '@/modules/sessions/sessions.module';
import { ShowPhotosModule } from '@/modules/show-photos/show-photos.module';
import { ShowTypesModule } from '@/modules/show-types/show-types.module';
import { ShowsModule } from '@/modules/shows/shows.module';
import { SpacesModule } from '@/modules/spaces/spaces.module';
import { TicketsModule } from '@/modules/tickets/tickets.module';
import { TranslationLanguagesModule } from '@/modules/translation-languages/translation-languages.module';
import { TranslationsModule } from '@/modules/translations/translations.module';
import { UsersModule } from '@/modules/users/users.module';
import { VideoTechnologiesModule } from '@/modules/video-technologies/video-technologies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AudioTechnologiesModule,
    DatabaseModule,
    FilesModule,
    GenresModule,
    LanguagesModule,
    LocationsModule,
    LoungesModule,
    PlacesModule,
    SeatsModule,
    SessionPlacesModule,
    SessionsModule,
    ShowPhotosModule,
    ShowTypesModule,
    ShowsModule,
    SpacesModule,
    TicketsModule,
    TranslationLanguagesModule,
    TranslationsModule,
    UsersModule,
    VideoTechnologiesModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
