package com.triptodo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "transfers")
public class Transfer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String tipo;

    @Column(nullable = false)
    private String localOrigem;

    @Column(nullable = false)
    private String localDestino;

    @Column(nullable = false)
    private LocalDateTime dataHora;

    private String observacao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "destino_id", nullable = false)
    private Destino destino;

    public Transfer() {
    }

    public Transfer(Long id, String tipo, String localOrigem, String localDestino,
                    LocalDateTime dataHora, String observacao, Destino destino) {
        this.id = id;
        this.tipo = tipo;
        this.localOrigem = localOrigem;
        this.localDestino = localDestino;
        this.dataHora = dataHora;
        this.observacao = observacao;
        this.destino = destino;
    }

    public Long getId() {
        return id;
    }

    public String getTipo() {
        return tipo;
    }

    public String getLocalOrigem() {
        return localOrigem;
    }

    public String getLocalDestino() {
        return localDestino;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public String getObservacao() {
        return observacao;
    }

    public Destino getDestino() {
        return destino;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public void setLocalOrigem(String localOrigem) {
        this.localOrigem = localOrigem;
    }

    public void setLocalDestino(String localDestino) {
        this.localDestino = localDestino;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public void setDestino(Destino destino) {
        this.destino = destino;
    }
}