import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { GeneralService } from 'src/app/services/general.service';

@Component({
    selector: 'app-create-complaint',
    standalone: true,
    templateUrl: './create-complaint.component.html',
    styleUrls: ['./create-complaint.component.css'],
    imports: [CommonModule, HeaderComponent]
})
export class CreateComplaintComponent {
    constructor(
        private generalService: GeneralService
    ) {}

    hasError = false;
    errorMessage = '';
    hasSuccess = false;
    successMessage = '';
    loading = false;

    handleCreateComplaint(event: any) {
        this.loading = true;
        
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const type = form.type.value;

        const data = {
            title,
            description,
            type
        };

        this.generalService.createComplaint(data).subscribe({
            next: (response) => {
                if (response.status) {
                this.hasSuccess = true;
                this.successMessage = 'Complaint created successfully';
        
                setTimeout(() => {
                    this.hasSuccess = false;
                    this.successMessage = '';
                }, 3000);
                }
            },
            error: (error) => {
                console.log(error);
        
                this.hasError = true;
                this.errorMessage = 'Failed to create complaint';
        
                setTimeout(() => {
                this.hasError = false;
                this.errorMessage = '';
                }, 3000);

                event.target.reset();
                this.loading = false;
            },
            complete: () => {
                event.target.reset();
                this.loading = false;
            }
        });

        event.preventDefault();
    }
}
