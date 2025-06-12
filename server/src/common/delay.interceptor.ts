import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, delay, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const DELAY_MS = 5000; // 5 seconds delay
@Injectable()
export class DelayInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      switchMap(data =>
        of(data).pipe(delay(DELAY_MS)) // delays response by 5 seconds
      ),
    );
  }
}
