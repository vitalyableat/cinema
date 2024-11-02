import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import { AudioTechnology } from '@/modules/audio-technologies/entities/audio-technology.entity';
import { Genre } from '@/modules/genres/entities/genre.entity';
import { Language } from '@/modules/languages/entities/language.entity';
import { Location } from '@/modules/locations/entities/location.entity';
import { Lounge } from '@/modules/lounges/entities/lounge.entity';
import { Place } from '@/modules/places/entities/place.entity';
import { Seat } from '@/modules/seats/entities/seat.entity';
import { SessionPlace } from '@/modules/session-places/entities/session-place.entity';
import { Session } from '@/modules/sessions/entities/session.entity';
import { ShowPhoto } from '@/modules/show-photos/entities/show-photo.entity';
import { ShowType } from '@/modules/show-types/entities/show-type.entity';
import { Show } from '@/modules/shows/entities/show.entity';
import { Space } from '@/modules/spaces/entities/space.entity';
import { Ticket } from '@/modules/tickets/entities/ticket.entity';
import { TranslationLanguage } from '@/modules/translation-languages/entities/translation-language.entity';
import { Translation } from '@/modules/translations/entities/translation.entity';
import { User } from '@/modules/users/entities/user.entity';
import { VideoTechnology } from '@/modules/video-technologies/entities/video-technology.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.getOrThrow('POSTGRES_HOST'),
  port: configService.getOrThrow('POSTGRES_PORT'),
  username: configService.getOrThrow('POSTGRES_USER'),
  password: configService.getOrThrow('POSTGRES_PASSWORD'),
  database: configService.getOrThrow('POSTGRES_DB'),
  migrations: ['migrations/**'],
  entities: [
    AudioTechnology,
    Genre,
    Language,
    Location,
    Lounge,
    Place,
    Seat,
    SessionPlace,
    Session,
    ShowPhoto,
    ShowType,
    Show,
    Space,
    Ticket,
    TranslationLanguage,
    Translation,
    User,
    VideoTechnology,
  ],
});
