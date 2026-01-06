import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'
import { TrackService } from '../../core/services/track.service';
import { MusicCategory } from '../../core/models/track';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-track-manager',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './track-manager.component.html',
  styleUrl: './track-manager.component.scss'
})
export class TrackManagerComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  protected trackService = inject(TrackService);

  categories: MusicCategory[] = ['Pop', 'Rock', 'Rap', 'Jazz', 'Classical', 'Electro', 'Other'];

  selectedAudioFile: File | null = null;
  selectedCouverFile: File | null = null;

  trackForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    artist: ['', [Validators.required]],
    category: ['pop' as MusicCategory, [Validators.required]],
    description: ['', [Validators.maxLength(200)]]
  });

  onAudiFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedAudioFile = input.files[0];
    }
  }
  onCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedCouverFile = input.files[0];
    }
  }
  

}
