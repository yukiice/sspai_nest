import { HttpException, HttpStatus } from '@nestjs/common'
import { RESPONSE_SUCCESS_CODE } from "../enum/contentType.enum";
import { ErrorTextEnum } from "../enum/errorText.enum";


  export class ResultException extends HttpException {
  private errorCode: number
  constructor(error: ErrorTextEnum | string) {
    // 如果是非 ErrorEnum
    if (!error.includes(':')) {
      super(
        HttpException.createBody({
          code: RESPONSE_SUCCESS_CODE,
          message: error,
        }),
        HttpStatus.OK,
      )
      this.errorCode = RESPONSE_SUCCESS_CODE
      return
    }

    const [code, message] = error.split(':')
    super(
      HttpException.createBody({
        code,
        message,
      }),
      HttpStatus.OK,
    )

    this.errorCode = Number(code)
  }

  getErrorCode(): number {
    return this.errorCode
  }
}