import { ClientSvcQueryable, IClientSvcQueryable } from "@pnp/sp-clientsvc";
import { ILabelData, ILabel, ILabels } from "./labels";
import { ITermSet, ITermSets } from "./termsets";
export interface ITerms extends IClientSvcQueryable {
    get(): Promise<(ITermData & ITerm)[]>;
}
export interface ITermData {
    CustomProperties?: any;
    CustomSortOrder?: any | null;
    Description?: string;
    Id?: string;
    IsAvailableForTagging?: boolean;
    IsDeprecated?: boolean;
    IsKeyword?: boolean;
    IsPinned?: boolean;
    IsPinnedRoot?: boolean;
    IsReused?: boolean;
    IsRoot?: boolean;
    IsSourceTerm?: boolean;
    LastModifiedDate?: string;
    LocalCustomProperties?: any;
    MergedTermIds?: any[];
    Name?: string;
    Owner?: string;
    PathOfTerm?: string;
    TermsCount?: number;
}
export interface ITerm extends IClientSvcQueryable {
    readonly labels: ILabels;
    readonly parent: ITerm;
    readonly pinSourceTermSet: ITermSet;
    readonly reusedTerms: ITerms;
    readonly sourceTerm: ITerm;
    readonly termSet: ITermSet;
    readonly termSets: ITermSets;
    createLabel(name: string, lcid: number, isDefault?: boolean): Promise<ILabelData & ILabel>;
    deprecate(doDeprecate: boolean): Promise<void>;
    get(): Promise<(ITermData & ITerm)>;
    setDescription(description: string, lcid: number): Promise<void>;
    setLocalCustomProperty(name: string, value: string): Promise<void>;
    update(properties: {
        Name: string;
    }): Promise<ITermData & ITerm>;
}
export declare class Terms extends ClientSvcQueryable implements ITerms {
    /**
     * Gets the terms in this collection
     */
    get(): Promise<(ITermData & ITerm)[]>;
}
/**
 * Represents the operations available on a given term
 */
export declare class Term extends ClientSvcQueryable implements ITerm {
    readonly labels: ILabels;
    readonly parent: ITerm;
    readonly pinSourceTermSet: ITermSet;
    readonly reusedTerms: ITerms;
    readonly sourceTerm: ITerm;
    readonly termSet: ITermSet;
    readonly termSets: ITermSets;
    /**
     * Creates a new label for this Term
     *
     * @param name label value
     * @param lcid language code
     * @param isDefault Is the default label
     */
    createLabel(name: string, lcid: number, isDefault?: boolean): Promise<ILabelData & ILabel>;
    /**
     * Sets the deprecation flag on a term
     *
     * @param doDeprecate New value for the deprecation flag
     */
    deprecate(doDeprecate: boolean): Promise<void>;
    /**
     * Loads the term data
     */
    get(): Promise<(ITermData & ITerm)>;
    /**
     * Sets the description
     *
     * @param description Term description
     * @param lcid Language code
     */
    setDescription(description: string, lcid: number): Promise<void>;
    /**
     * Sets a custom property on this term
     *
     * @param name Property name
     * @param value Property value
     */
    setLocalCustomProperty(name: string, value: string): Promise<void>;
    /**
     * Updates the specified properties of this term, not all properties can be updated
     *
     * @param properties Plain object representing the properties and new values to update
     */
    update(properties: {
        Name: string;
    }): Promise<ITermData & ITerm>;
}
