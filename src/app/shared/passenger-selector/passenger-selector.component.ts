import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-passenger-selector',
  templateUrl: './passenger-selector.component.html',
  styleUrls: ['./passenger-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassengerSelectorComponent),
      multi: true
    }
  ]
})
export class PassengerSelectorComponent implements ControlValueAccessor {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  value: number = 0;
  onChange = (val: number) => {}
  onTouch = () => {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method setDisabledState not implemented.');
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.onChange(this.value);
      this.onTouch();
    }
  }

  increment() {
    this.value++;
    this.onChange(this.value);
    this.onTouch();
  }
}
